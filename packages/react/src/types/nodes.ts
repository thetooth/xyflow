import type { CSSProperties, MouseEvent as ReactMouseEvent } from 'react';
import type { CoordinateExtent, NodeBase, NodeOrigin, OnError } from '@xyflow/system';

import { NodeTypes } from './general';

/**
 * The node data structure that gets used for the nodes prop.
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Node<NodeData = any, NodeType extends string | undefined = string | undefined> = NodeBase<
  NodeData,
  NodeType
> & {
  style?: CSSProperties;
  className?: string;
  resizing?: boolean;
  focusable?: boolean;
};

export type NodeMouseHandler<NodeType extends Node = Node> = (event: ReactMouseEvent, node: NodeType) => void;
export type SelectionDragHandler<NodeType extends Node = Node> = (event: ReactMouseEvent, nodes: NodeType[]) => void;
export type OnNodeDrag<NodeType extends Node = Node> = (
  event: ReactMouseEvent,
  node: NodeType,
  nodes: NodeType[]
) => void;

export type NodeWrapperProps = {
  id: string;
  nodesConnectable: boolean;
  elementsSelectable: boolean;
  nodesDraggable: boolean;
  nodesFocusable: boolean;
  onClick?: NodeMouseHandler;
  onDoubleClick?: NodeMouseHandler;
  onMouseEnter?: NodeMouseHandler;
  onMouseMove?: NodeMouseHandler;
  onMouseLeave?: NodeMouseHandler;
  onContextMenu?: NodeMouseHandler;
  resizeObserver: ResizeObserver | null;
  noDragClassName: string;
  noPanClassName: string;
  rfId: string;
  disableKeyboardA11y: boolean;
  nodeTypes?: NodeTypes;
  nodeExtent?: CoordinateExtent;
  nodeOrigin: NodeOrigin;
  onError?: OnError;
};
