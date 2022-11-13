from statistics import mode
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

from accounts.models import User
from .Countries import Countries

# Create your models here.
class Plants(models.Model):

    user = models.CharField(max_length = 200)
    country = models.ForeignKey(Countries, on_delete = models.CASCADE)
    name = models.CharField(max_length = 40, unique = True)
    operating_hours = models.PositiveSmallIntegerField(
                        validators= [MinValueValidator(0.0),
                                    MaxValueValidator(24)])
    json_address = models.CharField(default = None,
                                    blank = True,
                                    null = True,
                                    max_length=200)
    