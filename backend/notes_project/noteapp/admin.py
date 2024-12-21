# notes/admin.py
from django.contrib import admin
from .models import Note

# Register the Note model with the admin site
class NoteAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'created', 'updated', 'slug')  # Display these fields in the list view
    search_fields = ('title', 'body')  # Allow search by title and body
    list_filter = ('category',)  # Filter by category

admin.site.register(Note, NoteAdmin)  # Register Note with the custom admin class
