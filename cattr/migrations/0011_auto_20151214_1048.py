# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-14 15:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cattr', '0010_auto_20151214_1043'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=35)),
                ('slug', models.CharField(max_length=250)),
                ('created_at', models.DateTimeField()),
            ],
        ),
        migrations.AddField(
            model_name='cat',
            name='tags',
            field=models.ManyToManyField(related_name='cats', to='cattr.Tag'),
        ),
    ]