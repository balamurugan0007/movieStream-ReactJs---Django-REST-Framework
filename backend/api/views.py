from rest_framework.response import Response 
from rest_framework .decorators import api_view
from .models import Movies , genere
from .serializer import MoviesSerializer , genereSerializer

# Create your views here.


@api_view(['GET'])
def movie(req):
    movie_data = Movies.objects.all()
    serilized_data = MoviesSerializer(movie_data , many = True)
    return Response({"result":serilized_data.data , "statusCode":200 , "status":"Sucess"})
    

@api_view(["GET"])
def genere_list(req):
    genere_data = genere.objects.all() 
    serilized_data =genereSerializer(genere_data , many = True)
    return Response({"result":serilized_data.data , "statusCode":200 , "status":"Sucess"})
   
   
 
@api_view(['GET'])
def filter_genere(req , id):
    movie_data = Movies.objects.filter(category = id)
    serilized_data = MoviesSerializer(movie_data , many = True)
    return Response({"result":serilized_data.data , "statusCode":200 , "status":"Sucess"})   
    
    
@api_view(['GET'])
def filter_query(req):
    likes = req.query_params.get("likes")
    movie_data = Movies.objects.filter(likes = likes)
    serilized_data = MoviesSerializer(movie_data , many = True)
    return Response({"result":serilized_data.data , "statusCode":200 , "status":"Sucess"})   