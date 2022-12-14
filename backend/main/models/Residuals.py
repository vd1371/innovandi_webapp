from statistics import mode
from django.db import models


# Create your models here.
class Residuals(models.Model):
    name = models.CharField(max_length= 100)