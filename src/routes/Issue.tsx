import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { Alert, Col, Jumbotron, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { GET_ISSUE_INFO } from "../queries/GET_ISSUE_INFO";

export function Issue() {
  const { number }: { number: string } = useParams();
  const { loading, error, data } = useQuery(GET_ISSUE_INFO, {
    variables: { number: parseInt(number) },
    fetchPolicy: "cache-first"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <Alert variant="danger">
      Something went wrong when retrieving the information for this issue, try again later. or <Link to="/">go to the homepage</Link>.
    </Alert>
  )

  const issue = data.repository.issue;

  return (
    <Fragment>
      <Jumbotron className="text-center">
        <h1>{issue.title}</h1>
      </Jumbotron>
      <Row>
        <Col xs={12} md={8}>
          <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
        </Col>
        <Col xs={12} md={4}>
          <dl>
            <dt>Author</dt>
            <dd>
              <a rel="noopener noreferrer" target="_blank" href={issue.author.url}>{issue.author.login}</a>
            </dd>
            <dt>Issue status:</dt>
            <dd>
              {issue.state.charAt(0) + issue.state.slice(1).toLowerCase()}
            </dd>
            <dt>Created at:</dt>
            <dd>{new Date(issue.createdAt).toUTCString()}</dd>
            <dt>Last edited at:</dt>
            <dd>{new Date(issue.lastEditedAt).toUTCString()}</dd>
            {issue.closed && (
              <Fragment>
                <dt>Closed at:</dt>
                <dd>{new Date(issue.closedAt).toUTCString()}</dd>
              </Fragment>
            )}
            <dt>Original posting:</dt>
            <dd>
              <a rel="noopener noreferrer" target="_blank" href={issue.url}>View issue on GitHub</a>
            </dd>
          </dl>
        </Col>
      </Row>
    </Fragment>
  );
}