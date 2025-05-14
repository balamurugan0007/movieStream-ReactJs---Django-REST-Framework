from django.db import models

# Create your models here.



class genere(models.Model):
    name = models.CharField(max_length=150 , blank=False , null=False)
    created_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
class Language(models.Model):
    name = models.CharField(max_length=150 , blank=False , null=False)
    
    def __str__(self):
        return self.name
    
    
class Movies(models.Model):
    name = models.CharField(max_length=150 , blank=False , null=False)
    description = models.CharField(max_length=300)
    category = models.ManyToManyField(genere, related_name="movies")
    likes = models.FloatField()
    share = models.FloatField()
    dislike = models.FloatField()
    Rating = models.FloatField()
    # image = models.ImageField(upload_to="static/movies" , default="")
    poster = models.CharField(max_length=700)
    language = models.ManyToManyField(Language , related_name="lang")
    release_date = models.DateField( auto_now=False, auto_now_add=False)
    is_popular = models.BooleanField(default=False)
    is_trending = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name
    