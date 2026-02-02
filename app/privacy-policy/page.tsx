import LegalPage from "@/components/layout/LegalPage";

export default function PrivacyPolicy() {
    return (
        <LegalPage title="Privacy Policy" date="October 24, 2025">
            <p>
                At Aetheron Studio, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
                We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
                <li>Fill out a contact form or newsletter subscription.</li>
                <li>Request a quote or consultation.</li>
                <li>Interact with our website analytics (e.g., via cookies).</li>
            </ul>
            <p>
                The types of information we collect include your name, email address, phone number, and any other details you choose to provide in your messages.
            </p>

            <h3>2. How We Use Your Information</h3>
            <p>
                We use the information we collect for the following purposes:
            </p>
            <ul>
                <li>To provide and maintain our services.</li>
                <li>To communicate with you regarding your inquiries or projects.</li>
                <li>To send you newsletters or marketing communications (only if you have opted in).</li>
                <li>To analyze website usage and improve our user experience.</li>
            </ul>

            <h3>3. Data Security</h3>
            <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h3>4. Third-Party Services</h3>
            <p>
                We may use third-party services (such as analytics providers or email marketing tools) that collect, monitor, and analyze data. These third-party service providers have their own privacy policies addressing how they use such information.
            </p>

            <h3>5. Your Rights</h3>
            <p>
                You have the right to access, correct, or delete your personal information held by us. If you wish to exercise these rights, please contact us at <a href="mailto:hello@aetheronstudio.com">hello@aetheronstudio.com</a>.
            </p>

            <h3>6. Changes to This Policy</h3>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
        </LegalPage>
    );
}
