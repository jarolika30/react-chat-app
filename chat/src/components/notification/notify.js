import image from './msg.png';

const NotifyMe = (msg, icon) => {
	if (!("Notification" in window)) {
		alert("This browser does not support desktop notification");
	}

	else if (Notification.permission === "granted") {
		new Notification(
            "Note: ", {
                icon: image,
                tag : "ache-mail",
			    body : "You have new Messages!",
            }
        );
	}

	else if (Notification.permission !== 'denied') {
		Notification.requestPermission((permission) => {
			if (permission === "granted") {
				new Notification("Note: ", {
					tag : "ache-mail",
			        body : "You have new Messages!",
					icon: image,
				});
			}
		});
	}
}

export default NotifyMe;