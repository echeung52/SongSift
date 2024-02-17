from django.urls import path
from .views import getRecommendations, search, getTrack, getToken


urlpatterns = [
    path('recommendations/', getRecommendations, name='recommendations'),
    path('search/<str:song>', search, name='search'),
    path('track/', getTrack, name='track'),
    path('token/', getToken, name='token'),
]
