import { useState, useContext } from "react";
import { Card, Form, Button, Alert, Spinner } from "react-bootstrap";
import AuthContext from "../store/auth-context";

function Profile() {
  const authCtx = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: authCtx.token,
            password: password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      // Firebase returns a new idToken
      authCtx.login(data.idToken);

      setMessage("Password changed successfully.");
      setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      className="mx-auto mt-5 p-4 shadow"
      style={{ maxWidth: "450px" }}
    >
      <h2 className="text-center mb-4">Profile</h2>

      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          className="w-100"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              Updating...
            </>
          ) : (
            "Change Password"
          )}
        </Button>

        {message && (
          <Alert variant="success" className="mt-3">
            {message}
          </Alert>
        )}

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
      </Form>
    </Card>
  );
}

export default Profile;