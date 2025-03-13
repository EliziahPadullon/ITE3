from django.urls import path
from .views import get_items, add_item, get_item, update_item, delete_item

urlpatterns = [
    path('api/items/', get_items, name='get_items'),
    path('api/items/add/', add_item, name='add_item'),
    path('api/items/<int:item_id>/', get_item, name='get_item'),
    path('api/items/update/<int:item_id>/', update_item, name='update_item'),
    path('api/items/delete/<int:item_id>/', delete_item, name='delete_item'),
]
