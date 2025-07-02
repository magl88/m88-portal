# M88 Portal

This is a demo project where I try different technologies.

## Docker

1. Command to create a network, for a project

```bash
docker network create -d bridge m88_portal
```

2. With the second step, follow the Container launching team using Docker Compose:

```bash
docker compose up -d
```

## Ports

- 5600 - Client
- 5610 - Server

- 5680 - Portainer
- 5681 - Nginx proxy manager

- 5670 - pgAdmin
- 5677 - Postgres 17

- 5660 - Redis
- 5661 - Redis insight

- 5678 - n8n

- 5690 - minio
- 5691 - minio UI
