FROM archlinux

LABEL name="LinuxHub" \
      maintainer="Tryton Van Meer <trytonvanmeer@protonmail.com>"

# Update
RUN pacman -Syu --noconfirm

# Install packages
RUN pacman -S --noconfirm \
    libosinfo \
    nginx \
    gunicorn \
    python \
    python-gobject \
    python-pip

COPY linuxhub-api /app/api
COPY configs/start.sh /app
COPY configs/nginx.conf /etc/nginx/
COPY configs/linuxhub.nginx /etc/nginx/sites-enabled/linuxhub

WORKDIR /app/api
RUN pip install -r requirements.txt

CMD /app/start.sh