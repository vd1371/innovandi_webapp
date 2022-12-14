from django import forms

from . import models

# Create your forms here.

class MachinesForm(forms.ModelForm):

    class Meta:
        model = models.Machines
        fields = "__all__"
        exclude = ("user",)

class EnergySourcesForm(forms.ModelForm):

    class Meta:
        model = models.EnergySourceTypes
        fields = "__all__"
        exclude = ("user",)