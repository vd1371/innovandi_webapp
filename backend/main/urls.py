from re import template
from django.urls import path
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = "main"

# Create a router and register our viewsets with it.
router = DefaultRouter()

router.register(r'plants', views.PlantsViewSet, basename='plants')

urlpatterns = [
    path('', include(router.urls)),
]