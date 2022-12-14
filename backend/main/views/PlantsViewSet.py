from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import permissions

from ..models import Plants
from ..serializers import PlantsSerializer

class PlantsViewSet(viewsets.ModelViewSet):
    
    queryset = Plants.objects.all()
    serializer_class = PlantsSerializer
