import csv
from pymongo import MongoClient

# Підключення до бази даних MongoDB

mongo_client = MongoClient("mongodb://127.0.0.1:27017/")
mongo_db = mongo_client["steam_games"]
collection = mongo_db["games_details"]
# Отримання даних з MongoDB колекції
data_from_mongodb = list(collection.find())

# Відкриття CSV файлу для запису
with open('games.csv', mode='w', newline='', encoding='utf-8') as file:
    fieldnames = ['steam_appid', 'type', 'name',
                  'genres']
    writer = csv.DictWriter(file, fieldnames=fieldnames)

    # Запис заголовків у CSV файл
    writer.writeheader()

    # Проходження через дані з MongoDB і запис даних в CSV файл
    for item in data_from_mongodb:
        if item.get('success', False):
            game_data = item.get('data', {})
            if all(key in game_data for key in fieldnames):
                genres = [{'id': genre['id'], 'name': genre['description']}
                          for genre in game_data.get('genres', [])]

                writer.writerow({
                    'steam_appid': game_data['steam_appid'],
                    'type': game_data['type'],
                    'name': game_data['name'],
                    'genres': genres
                })
            else:
                print(f"Missing data for game: {game_data['name']}")
        else:
            print(f"Failed to load game: {item.get('app_id')}")

print("CSV файл успішно створено з даними про ігри.")
