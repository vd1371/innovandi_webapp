from re import template
from django.urls import path
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView
from . import views

app_name = "main"

urlpatterns = [
    path("", TemplateView.as_view(template_name = 'home.html'), name="home"),
    
    path("machines_data_collection/",
            views.MachinesView.as_view(), name="machines_data_collection"),
    path("energy_source_collection/",
            views.EnergySourcesView.as_view(), name="energy_source_collection"),
]