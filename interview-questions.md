# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

Your answer: the key would be called animal_id and it would inside the sighthings model.

Researched answer: Acoording to what I could find it would be the same logic it would be called animal_id and would be inside the sighthings model.

2. Which RESTful routes must always be passed params? Why?

Your answer: the ones i remember are Update and delete. as this are key components as they are needed to tell the program what to do

Researched answer: so theyre Update, Delete, Show, and Edit theyre all need to specify what variable theyre are trying to modify.

3. Name three rails generator commands. What is created by each?

Your answer:model, migration, controller
model: Allows the abiltiy to make a table in the database.
Migration: allows you to link a column to another model
controller:allows you to be able to manuver the information between view and database.

Researched answer:
Model: Rails Model is a Ruby class that can add database records (ex whole rows in an Excel table), find particular data you're looking for, update that data, or remove data.
Migration: Migrations are a convenient way to alter your database schema over time in a consistent way. They use a Ruby DSL so that you don't have to write SQL by hand, allowing your schema and changes to be database independent.
Controller: A controller is a ruby class which inherits from ApplicationController and has methods just like any other class.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET" /users =index

method="GET" /users/1 =show

method="GET" /users/new =new

method="GET" /users/edit/1 =edit

method="POST" /users/ =create

method="PUT" /users/1 =update

method="DELETE" /users/1 =destroy
