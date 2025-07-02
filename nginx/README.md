Launching a container for a database based on Portainer.

## Getting Started

1. The first step, set the environment variables from the `.env` file.

2. With the second step, follow the Container launching team using Docker Compose:

```bash
docker compose up -d
```

Проброс портов
Чтобы просмотреть существующие переадресации портов:
netsh interface portproxy show all

Powershell command:
netsh interface portproxy add v4tov4 listenport=4000 listenaddress=0.0.0.0 connectport=4000 connectaddress=192.168.101.100

To delete a particular port-forwarding:

netsh interface portproxy delete v4tov4 listenport=<port> listenaddress=<IP>
netsh interface portproxy delete v4tov4 listenport=5150 listenaddress=0.0.0.0
