let currentTaskId = null;

    const logTask = async function(id) {
        const response = await fetch('/log', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                users_id: -1,
                students_id: -1,
                tasks_id: id,
                duration: "'+00:00:01'"
            })
        });
        const result = await response.text();
        console.log(result);

        currentTaskId = id;
    };