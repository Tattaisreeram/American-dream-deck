"use client";

import { Component, type ReactNode } from "react";

interface Props { children: ReactNode; }
interface State { error: Error | null; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#080808]">
          <div className="text-center">
            <p className="text-[9px] tracking-[0.4em] text-[#c9a84c] uppercase mb-3">
              Something went wrong
            </p>
            <button
              onClick={() => this.setState({ error: null })}
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
