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

# Setup API
COPY linuxhub-api /app/api

WORKDIR /app/api
RUN pip install -r requirements.txt

COPY configs/start.sh /app

CMD /app/start.sh