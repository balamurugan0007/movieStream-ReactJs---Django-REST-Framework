# Generated by Django 5.1.7 on 2025-04-12 02:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='image',
            field=models.ImageField(default='', upload_to='static/movies'),
        ),
    ]
