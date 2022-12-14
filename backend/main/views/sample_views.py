from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import CreateView

from .. import forms

# Create your views here.
def home_view(request):
    return render(request, template_name = "home")

class MachinesView(CreateView):
    form_class = forms.MachinesForm
    template_name = "machines_data_collection_form.html"
    success_url = reverse_lazy("main:machines_data_collection")

class EnergySourcesView(CreateView):
    form_class = forms.EnergySourcesForm
    template_name = "energy_source_collection_form.html"
    success_url = reverse_lazy("main:energy_source_collection")

    def form_valid(self, form):
        form.instance.user = self.request.session['user_email']
        return super(EnergySourcesView, self).form_valid(form)