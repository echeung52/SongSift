from django.urls import path
from .views import getRecommendations, search


urlpatterns = [
    path('recommendations/', getRecommendations, name='recommendations'),
    path('search/<str:song>', search, name='search')
]
