
FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /app


COPY . .


RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=0 /app/out .

ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000

EXPOSE 8080
ENTRYPOINT ["dotnet", "store_project_api.dll"]
