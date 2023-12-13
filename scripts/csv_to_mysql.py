import mysql.connector
import pandas as pd
from sqlalchemy import create_engine

ratings_df = pd.read_csv('user_data_2.csv', usecols=[
                         'rating', 'userId', 'gameId'])
games_df = pd.read_csv('unique_values_3.csv', usecols=[
                       'gameId', 'steam_gameId', 'title', 'genres'])

engine = create_engine(
    'mysql+mysqlconnector://root:hidden@localhost/games_database')
games_df.to_sql('games', con=engine, if_exists='replace', index=False)
ratings_df.to_sql('ratings', con=engine, if_exists='replace', index=False)

print("Дані успішно записані у базу даних!")
