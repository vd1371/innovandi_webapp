from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

from .Countries import Countries

# Create your models here.
class EnergySourceTypes(models.Model):

    user = models.CharField(max_length = 200)
    energy_source = models.CharField(max_length = 20)
    name = models.CharField(unique = True, max_length = 50)
    country = models.ForeignKey(Countries, on_delete = models.CASCADE)
    co2_per_unit = models.FloatField(validators=[MinValueValidator(0.0)])

