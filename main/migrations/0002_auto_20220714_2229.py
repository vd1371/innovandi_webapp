# Generated by Django 4.0.6 on 2022-07-14 14:29

from django.db import migrations

import os
import pandas as pd
import numpy as np

from ..models import EnergySourceTypes
from ..models import Countries
from ..models import Plants

def populate(*ags, **kwargs):

    df = pd.read_csv(os.path.join('static', 'Country.csv'))
    for val in df['Country']:
        Countries.objects.get_or_create(country = val)

    all_countries = list(Countries.objects.all())
    for i in range(10):
        Plants.objects.get_or_create(
            user = str(np.random.rand()*np.random.rand()),
            country = np.random.choice(all_countries),
            name = f"test_plant_{i}",
            operating_hours = np.random.randint(4, 9),
            json_address = f"/test_address_{i}"
        )

class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(populate,)
    ]
