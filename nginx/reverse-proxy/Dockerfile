FROM nginx:1.12
 
# Conf for proxy service
COPY ./conf.d/ /etc/nginx/conf.d/

# NOT FOUND response
COPY ./frontend-not-found.html /var/www/html/frontend-not-found.html

# Proxy configurations
COPY ./includes/ /etc/nginx/includes/