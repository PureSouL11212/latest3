# Generated by Django 5.0.2 on 2024-03-04 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bill', '0003_product'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
        ),
    ]
