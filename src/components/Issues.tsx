import { useQuery } from '@apollo/client';
import React from 'react';
import { Alert, Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { GET_REPO_ISSUES } from "../queries/GET_REPO_ISSUES";
import { TStatus } from '../routes/Home';

interface IProps {
  search: string;
  status: TStatus;
}

interface INode {
  title: string;
  number: number;
}

export function Issues({ search, status }: IProps) {
  const query = `repo:facebook/react${search ? ` ${search} in:title,body` : ""} is:${status} type:issue`;
  const { loading, error, data } = useQuery(GET_REPO_ISSUES, {
    variables: { query },
    fetchPolicy: "cache-first"
  });

  if (loading) return <p>Loading issues...</p>
  if (error) return (
    <Alert variant="danger">
      Something went wrong when retrieving the issues, try again later.
    </Alert>
  )

  const issues = data.search.nodes;

  if (!issues.length) return <p>No search results!</p>

  return (
    <Row>
      {issues.map((node: INode, index: number) => {
        return (
          <Col xs={12} sm={6} lg={4} className="my-2" key={index}>
            <Card className="h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{node.title}</Card.Title>
                <Link to={`/issue/${node.number}`}>View issue #{node.number}</Link>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  );
}