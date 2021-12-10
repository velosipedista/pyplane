from django.urls import path
from .views import (
    post_list_and_create,
    hello_world_view,
    load_post_data_view,
    like_unlike_post,
    post_detail,
    post_detail_data_view,
    update_post,
    delete_post,
)

app_name = 'posts'

urlpatterns = [
    path('', post_list_and_create, name="main-board"),
    path('like-unlike/', like_unlike_post, name="like-unlike"),
    path('<pk>/', post_detail, name="post-detail"),
    path('data/<int:num_posts>', load_post_data_view, name="post-data"),
    path('<pk>/data/', post_detail_data_view, name='post-detail-data'),
    path('<pk>/update', update_post, name="post-update"),
    path('<pk>/delete', delete_post, name="post-delete"),

]