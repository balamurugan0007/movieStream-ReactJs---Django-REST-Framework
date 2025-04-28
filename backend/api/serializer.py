from rest_framework import serializers
from .models import genere , Movies , Language


class genereSerializer(serializers.ModelSerializer):
    class Meta:
        model = genere
        fields = "__all__"
        
    
class languageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = "__all__"
        
    
    
class MoviesSerializer(serializers.ModelSerializer):
    category = genereSerializer(many = True)
    language = languageSerializer(many = True)
    
    class Meta :
        model = Movies
        fields = "__all__"