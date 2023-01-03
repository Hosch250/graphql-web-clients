/**
 * @generated SignedSource<<b313f09ed06d076662248717530f1df7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BooksPage_query$data = {
  readonly nodes: ReadonlyArray<{
    readonly id: string;
    readonly isbn: string;
    readonly name: string;
  }> | null;
  readonly " $fragmentType": "BooksPage_query";
};
export type BooksPage_query$key = {
  readonly " $data"?: BooksPage_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"BooksPage_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BooksPage_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Book",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isbn",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AllBooksConnection",
  "abstractKey": null
};

(node as any).hash = "9c7f9a73fd4631856a74ba6fa582e742";

export default node;
