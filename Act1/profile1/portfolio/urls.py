from django.urls import path
from .views import index, aboutme, project, contact

app_name = "portfolio"
urlpatterns = [
    path('', index, name='index'),
    path('aboutme', aboutme, name='aboutme'),
    path('project', project, name='project'),
    path('contact', contact, name='contact'),
]
