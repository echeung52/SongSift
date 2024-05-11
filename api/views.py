from rest_framework.response import Response
from rest_framework.decorators import api_view
import os
import base64
from requests import post, get
import json

client_id = 'a058da0fea2a4e6d888f222e9e288387'
client_secret = '5ed52bc698b74801aa4f7847fa41c27b'

def get_token():
    auth_string = client_id + ':' + client_secret
    auth_bytes = auth_string.encode('utf-8')
    auth_base64 = str(base64.b64encode(auth_bytes), 'utf-8')

    url = 'https://accounts.spotify.com/api/token'
    headers = {
        'Authorization': 'Basic ' + auth_base64,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    data = {'grant_type': 'client_credentials'}
    result = post(url, headers=headers, data=data)
    json_result = json.loads(result.content)
    token = json_result['access_token']
    return token

@api_view(['GET'])
def getToken(request):
    auth_string = client_id + ':' + client_secret
    auth_bytes = auth_string.encode('utf-8')
    auth_base64 = str(base64.b64encode(auth_bytes), 'utf-8')

    url = 'https://accounts.spotify.com/api/token'
    headers = {
        'Authorization': 'Basic ' + auth_base64,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    data = {'grant_type': 'client_credentials'}
    result = post(url, headers=headers, data=data)
    json_result = json.loads(result.content)
    token = json_result['access_token']
    return Response({"token":token})

def get_auth_header(token):
    return {"Authorization": "Bearer " + token}


@api_view(['GET'])
def getRecommendations(request):
    token = get_token()
    trackID = request.query_params.get('q', None)
    url = 'https://api.spotify.com/v1/recommendations'
    params = {
        'seed_tracks': trackID,
        'limit': 12
    }

    headers = get_auth_header(token)
    
    result = get(url, headers=headers, params=params)

    json_result = json.loads(result.content)
   
    
    tracks_info = []
    for track in json_result.get('tracks', []):
        track_info = {
            'name': track.get('name', ''),
            'artist_name': track.get('artists', [{}])[0].get('name', ''),
            'external_url': track.get('external_urls', {}).get('spotify', ''),
            'images': [image.get('url', '') for image in track.get('album', {}).get('images', [])],
            'id': track.get('id'),
            'preview_url' : track.get('preview_url'),
        }
        tracks_info.append(track_info)

    return Response(tracks_info)

@api_view(['GET'])
def search(request, song):
    url = 'https://api.spotify.com/v1/search'
    token = get_token()
    headers = get_auth_header(token)
    params = {
        'q': song,
        'type': 'track',
        'limit': 12
    }

    result = get(url, headers=headers, params=params)
    json_result = result.json()

    tracks = json_result.get('tracks', {}).get('items', [])
    
    track_info = []
    for track in tracks:
        track_info.append({
            'id': track.get('id'),
            'name': track.get('name'),
            'image': track.get('album', {}).get('images', [{}])[0].get('url'),
            'artist_name': track.get('artists', [{}])[0].get('name', ''),
        })
    return Response(track_info)

@api_view(['GET'])
def getTrack(request):
    token = get_token()
    headers = get_auth_header(token)
    trackID = request.query_params.get('q', None)

    url = f'https://api.spotify.com/v1/tracks/{trackID}'
    
    result = get(url, headers=headers)
    track_data = result.json()

    track_info = {
        'id': track_data.get('id'),
        'name': track_data.get('name'),
        'image': track_data.get('album', {}).get('images', [{}])[0].get('url'),
        'artist_name': track_data.get('artists', [{}])[0].get('name', ''),
        'external_url': track_data.get('external_urls', {}).get('spotify', ''),
        'preview_url' : track_data.get('preview_url'),
    }

    return Response(track_info) 




    
