from django.urls import path
from .views import dashboard, reports, settings

app_name = "dashboard"
urlpatterns = [
    path('', dashboard, name='index'),
    path('reports/', reports, name='reports'),
    path('settings/', settings, name='settings'),
]
