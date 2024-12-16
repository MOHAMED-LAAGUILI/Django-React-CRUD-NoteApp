from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Note
from .serializers import NoteSerializer
from rest_framework.exceptions import NotFound

# Define the API view to handle GET requests for all notes
class NoteList(APIView):
    def get(self, request):
        notes = Note.objects.all()  # Retrieve all notes from the database
        serializer = NoteSerializer(notes, many=True)  # Serialize the notes
        return Response(serializer.data)  # Return the serialized data as JSON

    def post(self, request):
        serializer = NoteSerializer(data=request.data)  # Deserialize incoming data
        if serializer.is_valid():  # Validate the data
            serializer.save()  # Save the new note to the database
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Return the created note
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Return validation errors


# Define the API view to handle GET requests for a specific note by slug
class NoteDetail(APIView):
    def get(self, request, slug):
        try:
            note = Note.objects.get(slug=slug)  # Retrieve the note by its slug
        except Note.DoesNotExist:
            raise NotFound(detail="Note not found")  # Raise a 404 error if the note doesn't exist
        
        serializer = NoteSerializer(note)  # Serialize the note
        return Response(serializer.data)  # Return the serialized note data as JSON

    def put(self, request, slug):
        try:
            note = Note.objects.get(slug=slug)  # Retrieve the note by its slug
        except Note.DoesNotExist:
            raise NotFound(detail="Note not found")  # Raise a 404 error if the note doesn't exist

        serializer = NoteSerializer(note, data=request.data)  # Deserialize the incoming data and bind it to the note instance
        if serializer.is_valid():  # Check if the new data is valid
            serializer.save()  # Save the updated note to the database
            return Response(serializer.data)  # Return the updated note as JSON
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Return validation errors if any

    def delete(self, request, slug):
        try:
            note = Note.objects.get(slug=slug)  # Retrieve the note by its slug
        except Note.DoesNotExist:
            raise NotFound(detail="Note not found")  # Raise a 404 error if the note doesn't exist

        note.delete()  # Delete the note
        return Response(status=status.HTTP_204_NO_CONTENT)  # Return a 204 s