# Generated by Django 4.0.5 on 2022-09-02 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20220714_2229'),
    ]

    operations = [
        migrations.AlterField(
            model_name='energysourcetypes',
            name='user',
            field=models.CharField(max_length=20),
        ),
    ]
