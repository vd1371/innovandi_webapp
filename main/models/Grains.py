from statistics import mode
from django.db import models


# Create your models here.
class Grains(models.Model):

    name = models.CharField(max_length= 100)
    min_size = models.FloatField()
    max_size = models.FloatField()