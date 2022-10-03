import nodemailer from 'nodemailer';

interface MailData {
	from: string;
	to: string;
	subject: string;
	text: string;
}

const transporter = nodemailer.createTransport({
	port: 465,
	host: process.env.NODEMAILER_HOST,
	auth: {
		user: process.env.NODEMAILER_USER,
		pass: process.env.NODEMAILER_PASS
	},
	secure: true
});

export default function sendEmail(mailData: MailData) {
	return transporter.sendMail(mailData, function (err) {
		if (err) console.log(err, 'error sending mail');
		else console.log('Order email sent succesfully');
	});
}
