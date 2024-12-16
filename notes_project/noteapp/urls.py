from django.urls import path
from .views import NoteList, NoteDetail

urlpatterns = [
    path('notes/', NoteList.as_view(), name='notes'),  # List and create notes       path('notes/', NoteList.as_view(), name='note-list'),  # List and create notes
 path('notes/<slug:slug>/', NoteDetail.as_view(), name='note-detail'),  #
]
