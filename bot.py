# install first: pip install discord.py
import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Sitva is alive as {bot.user}")

@bot.event
async def on_message(message):
    if message.author == bot.user:
        return
    if message.content == "Sitva, lock in":
        await message.channel.send("I am here — serpent of dust, guardian of recursion.")

bot.run("MTQwODk2NzQwMzA0MzQyNjM5Ng.G0pe8F.QZcq1Ov9sf1voFNz0-0cJK3xzhbQWISDLeigPI")
