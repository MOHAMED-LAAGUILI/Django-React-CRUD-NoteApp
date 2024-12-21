from django.db import models
from django.utils.text import slugify  # Import slugify function
from django.utils.crypto import get_random_string  # Import get_random_string function

class Note(models.Model):
    # Define category choices
    class Category(models.TextChoices):
        WORK = 'Work'
        PERSONAL = 'Personal'
        STUDY = 'Study'
        OTHERS = 'Others'

    title = models.CharField(max_length=200)
    body = models.TextField()
    slug = models.SlugField(unique=True)
    category = models.CharField(
        max_length=50, 
        choices=Category.choices,  # Use the choices defined above
        default=Category.OTHERS  # Optional: Default to 'Others' if not specified
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:  # Only set slug if it's not already set
            self.slug = slugify(self.title)  # Generate the slug from the title
            # Check if the generated slug already exists in the database
            while Note.objects.filter(slug=self.slug).exists():
                # If it exists, append a random string to make it unique
                self.slug = f'{slugify(self.title)}-{get_random_string(5)}'
        super().save(*args, **kwargs)  # Call the original save method
