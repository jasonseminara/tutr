# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-14 00:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cattr', '0006_auto_20151213_1859'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='cat',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cattr.Cat'),
        ),
    ]