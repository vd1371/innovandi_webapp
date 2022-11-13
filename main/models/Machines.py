from statistics import mode
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

from accounts.models import User
from .EnergySourceTypes import EnergySourceTypes

# Create your models here.
class Machines(models.Model):
    
    user = models.CharField(max_length = 200)
    brand = models.CharField(max_length= 100)
    model_name = models.CharField(max_length= 100)
    age = models.PositiveSmallIntegerField(default = 0, validators = [MinValueValidator(0), MaxValueValidator(50)])
    energy_consumption = models.PositiveSmallIntegerField(validators=[MinValueValidator(0), MaxValueValidator(1000)])

