delete from notes
where author_id = $1
and note_id = $2;

select * from notes
order by timestamp desc;