UPDATE notes
SET title = $1, timestamp = LOCALTIMESTAMP
WHERE author_id = $2
and note_id = $3
