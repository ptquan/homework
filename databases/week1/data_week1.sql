#show tables;
#Find out how many tasks are in the task table
SELECT COUNT(task.id)
FROM task;

SELECT COUNT(task.id) 
FROM task WHERE task.due_date is NULL;

SELECT* 
FROM task JOIN status ON task.status_id = status.id
WHERE status.name ="DONE";

#Find all the tasks that are not marked as done
#select * from status;
SELECT *
FROM task JOIN status ON task.status_id=status.id
WHERE status.name <> 'DONE';

#Get all the tasks, sorted with the most recently created first
SELECT* FROM task
ORDER BY task.created DESC;

#Get the single most recently created task
SELECT * 
FROM task ORDER BY task.created DESC
LIMIT 1;

#Get the title and due date of all tasks where the title or description contains database
SELECT task.title, task.due_date 
FROM task
WHERE task.title LIKE "%database%" OR task.due_date LIKE "%database%";

#Get the title and status (as text) of all tasks
SELECT task.title, status.name 
FROM task JOIN status ON task.status_id = status.id;

#Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.status_id)
FROM task JOIN status ON task.status_id=status.id
GROUP BY task.status_id;

#Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.status_id)
FROM task JOIN status ON task.status_id= status.id
GROUP BY status.name
ORDER BY task.status_id DESC;