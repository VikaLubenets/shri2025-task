import { useEffect, useRef } from "react";

interface Size {
  width: number;
  height: number;
}

interface EventProps {
  slim?: boolean;
  icon: string;
  iconLabel: string;
  title: string;
  subtitle?: string;
  onSize?: (size: Size) => void;
}

export function Event(props: EventProps) {
  const ref = useRef<HTMLLIElement | null>(null);
  const { onSize } = props;

  useEffect(() => {
    if (!ref.current || !onSize) return;

    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;
    onSize({ width, height });
  }, [onSize]);

  return (
    <li ref={ref} className={'event' + (props.slim ? ' event_slim' : '')}>
      <button className="event__button">
        <span
          className={`event__icon event__icon_${props.icon}`}
          role="img"
          aria-label={props.iconLabel}
        ></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle && <span className="event__subtitle">{props.subtitle}</span>}
      </button>
    </li>
  );
}
